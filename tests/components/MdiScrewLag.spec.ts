
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScrewLag from "../../src/components/MdiScrewLag.vue";

test("MdiScrewLag snapshot", () => {
  const wrapper = mount(MdiScrewLag, {});
  expect(wrapper.html()).toMatchSnapshot();
});
