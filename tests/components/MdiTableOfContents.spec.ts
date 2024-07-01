
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableOfContents from "../../src/components/MdiTableOfContents.vue";

test("MdiTableOfContents snapshot", () => {
  const wrapper = mount(MdiTableOfContents, {});
  expect(wrapper.html()).toMatchSnapshot();
});
