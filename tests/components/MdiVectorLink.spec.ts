
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorLink from "../../src/components/MdiVectorLink.vue";

test("MdiVectorLink snapshot", () => {
  const wrapper = mount(MdiVectorLink, {});
  expect(wrapper.html()).toMatchSnapshot();
});
