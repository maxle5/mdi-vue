
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbOff from "../../src/components/MdiLightbulbOff.vue";

test("MdiLightbulbOff snapshot", () => {
  const wrapper = mount(MdiLightbulbOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
