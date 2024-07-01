
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInboxFullOutline from "../../src/components/MdiInboxFullOutline.vue";

test("MdiInboxFullOutline snapshot", () => {
  const wrapper = mount(MdiInboxFullOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
