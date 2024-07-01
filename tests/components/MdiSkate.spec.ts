
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkate from "../../src/components/MdiSkate.vue";

test("MdiSkate snapshot", () => {
  const wrapper = mount(MdiSkate, {});
  expect(wrapper.html()).toMatchSnapshot();
});
