
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInboxOutline from "../../src/components/MdiInboxOutline.vue";

test("MdiInboxOutline snapshot", () => {
  const wrapper = mount(MdiInboxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
