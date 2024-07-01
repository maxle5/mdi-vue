
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbAlertOutline from "../../src/components/MdiLightbulbAlertOutline.vue";

test("MdiLightbulbAlertOutline snapshot", () => {
  const wrapper = mount(MdiLightbulbAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
