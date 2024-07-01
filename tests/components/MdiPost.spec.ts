
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPost from "../../src/components/MdiPost.vue";

test("MdiPost snapshot", () => {
  const wrapper = mount(MdiPost, {});
  expect(wrapper.html()).toMatchSnapshot();
});
