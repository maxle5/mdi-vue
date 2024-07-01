
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAssistant from "../../src/components/MdiAssistant.vue";

test("MdiAssistant snapshot", () => {
  const wrapper = mount(MdiAssistant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
