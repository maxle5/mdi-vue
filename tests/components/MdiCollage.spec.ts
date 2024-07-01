
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCollage from "../../src/components/MdiCollage.vue";

test("MdiCollage snapshot", () => {
  const wrapper = mount(MdiCollage, {});
  expect(wrapper.html()).toMatchSnapshot();
});
