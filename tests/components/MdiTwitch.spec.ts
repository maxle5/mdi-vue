
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTwitch from "../../src/components/MdiTwitch.vue";

test("MdiTwitch snapshot", () => {
  const wrapper = mount(MdiTwitch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
