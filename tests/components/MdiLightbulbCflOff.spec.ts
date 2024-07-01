
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbCflOff from "../../src/components/MdiLightbulbCflOff.vue";

test("MdiLightbulbCflOff snapshot", () => {
  const wrapper = mount(MdiLightbulbCflOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
