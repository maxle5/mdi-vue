
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbCflSpiral from "../../src/components/MdiLightbulbCflSpiral.vue";

test("MdiLightbulbCflSpiral snapshot", () => {
  const wrapper = mount(MdiLightbulbCflSpiral, {});
  expect(wrapper.html()).toMatchSnapshot();
});
