
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWebhook from "../../src/components/MdiWebhook.vue";

test("MdiWebhook snapshot", () => {
  const wrapper = mount(MdiWebhook, {});
  expect(wrapper.html()).toMatchSnapshot();
});
