
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInboxRemove from "../../src/components/MdiInboxRemove.vue";

test("MdiInboxRemove snapshot", () => {
  const wrapper = mount(MdiInboxRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
