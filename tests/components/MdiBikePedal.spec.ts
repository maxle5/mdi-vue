
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBikePedal from "../../src/components/MdiBikePedal.vue";

test("MdiBikePedal snapshot", () => {
  const wrapper = mount(MdiBikePedal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
