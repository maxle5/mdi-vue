
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCodeBlockTags from "../../src/components/MdiCodeBlockTags.vue";

test("MdiCodeBlockTags snapshot", () => {
  const wrapper = mount(MdiCodeBlockTags, {});
  expect(wrapper.html()).toMatchSnapshot();
});
