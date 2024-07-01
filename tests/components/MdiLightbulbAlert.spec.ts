
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbAlert from "../../src/components/MdiLightbulbAlert.vue";

test("MdiLightbulbAlert snapshot", () => {
  const wrapper = mount(MdiLightbulbAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
