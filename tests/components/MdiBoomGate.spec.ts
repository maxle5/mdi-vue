
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBoomGate from "../../src/components/MdiBoomGate.vue";

test("MdiBoomGate snapshot", () => {
  const wrapper = mount(MdiBoomGate, {});
  expect(wrapper.html()).toMatchSnapshot();
});
