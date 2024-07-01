
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWikipedia from "../../src/components/MdiWikipedia.vue";

test("MdiWikipedia snapshot", () => {
  const wrapper = mount(MdiWikipedia, {});
  expect(wrapper.html()).toMatchSnapshot();
});
