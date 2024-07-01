
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCodeTags from "../../src/components/MdiCodeTags.vue";

test("MdiCodeTags snapshot", () => {
  const wrapper = mount(MdiCodeTags, {});
  expect(wrapper.html()).toMatchSnapshot();
});
