
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAllInclusiveBox from "../../src/components/MdiAllInclusiveBox.vue";

test("MdiAllInclusiveBox snapshot", () => {
  const wrapper = mount(MdiAllInclusiveBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
