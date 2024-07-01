
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBoomGateUp from "../../src/components/MdiBoomGateUp.vue";

test("MdiBoomGateUp snapshot", () => {
  const wrapper = mount(MdiBoomGateUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
