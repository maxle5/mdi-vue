
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFoodHalal from "../../src/components/MdiFoodHalal.vue";

test("MdiFoodHalal snapshot", () => {
  const wrapper = mount(MdiFoodHalal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
