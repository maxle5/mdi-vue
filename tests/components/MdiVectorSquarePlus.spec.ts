
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorSquarePlus from "../../src/components/MdiVectorSquarePlus.vue";

test("MdiVectorSquarePlus snapshot", () => {
  const wrapper = mount(MdiVectorSquarePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
