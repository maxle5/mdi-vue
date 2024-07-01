
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShare from "../../src/components/MdiShare.vue";

test("MdiShare snapshot", () => {
  const wrapper = mount(MdiShare, {});
  expect(wrapper.html()).toMatchSnapshot();
});
