
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChiliOff from "../../src/components/MdiChiliOff.vue";

test("MdiChiliOff snapshot", () => {
  const wrapper = mount(MdiChiliOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
