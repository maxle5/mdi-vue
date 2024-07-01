
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRssBox from "../../src/components/MdiRssBox.vue";

test("MdiRssBox snapshot", () => {
  const wrapper = mount(MdiRssBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
