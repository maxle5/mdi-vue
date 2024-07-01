
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInboxMultipleOutline from "../../src/components/MdiInboxMultipleOutline.vue";

test("MdiInboxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiInboxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
