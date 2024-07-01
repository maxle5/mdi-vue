
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbGroupOff from "../../src/components/MdiLightbulbGroupOff.vue";

test("MdiLightbulbGroupOff snapshot", () => {
  const wrapper = mount(MdiLightbulbGroupOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
