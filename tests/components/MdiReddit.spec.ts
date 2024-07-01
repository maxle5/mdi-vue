
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReddit from "../../src/components/MdiReddit.vue";

test("MdiReddit snapshot", () => {
  const wrapper = mount(MdiReddit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
