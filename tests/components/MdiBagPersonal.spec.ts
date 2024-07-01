
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBagPersonal from "../../src/components/MdiBagPersonal.vue";

test("MdiBagPersonal snapshot", () => {
  const wrapper = mount(MdiBagPersonal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
