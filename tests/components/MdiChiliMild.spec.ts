
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChiliMild from "../../src/components/MdiChiliMild.vue";

test("MdiChiliMild snapshot", () => {
  const wrapper = mount(MdiChiliMild, {});
  expect(wrapper.html()).toMatchSnapshot();
});
