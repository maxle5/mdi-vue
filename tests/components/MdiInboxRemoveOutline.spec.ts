
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInboxRemoveOutline from "../../src/components/MdiInboxRemoveOutline.vue";

test("MdiInboxRemoveOutline snapshot", () => {
  const wrapper = mount(MdiInboxRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
