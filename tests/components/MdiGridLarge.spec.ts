
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGridLarge from "../../src/components/MdiGridLarge.vue";

test("MdiGridLarge snapshot", () => {
  const wrapper = mount(MdiGridLarge, {});
  expect(wrapper.html()).toMatchSnapshot();
});
