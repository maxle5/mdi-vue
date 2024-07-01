
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeAssistant from "../../src/components/MdiHomeAssistant.vue";

test("MdiHomeAssistant snapshot", () => {
  const wrapper = mount(MdiHomeAssistant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
