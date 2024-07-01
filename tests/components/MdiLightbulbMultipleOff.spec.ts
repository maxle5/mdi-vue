
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbMultipleOff from "../../src/components/MdiLightbulbMultipleOff.vue";

test("MdiLightbulbMultipleOff snapshot", () => {
  const wrapper = mount(MdiLightbulbMultipleOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
