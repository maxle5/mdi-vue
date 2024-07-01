
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpaceInvaders from "../../src/components/MdiSpaceInvaders.vue";

test("MdiSpaceInvaders snapshot", () => {
  const wrapper = mount(MdiSpaceInvaders, {});
  expect(wrapper.html()).toMatchSnapshot();
});
