
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSqueegee from "../../src/components/MdiSqueegee.vue";

test("MdiSqueegee snapshot", () => {
  const wrapper = mount(MdiSqueegee, {});
  expect(wrapper.html()).toMatchSnapshot();
});
