
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRssOff from "../../src/components/MdiRssOff.vue";

test("MdiRssOff snapshot", () => {
  const wrapper = mount(MdiRssOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
