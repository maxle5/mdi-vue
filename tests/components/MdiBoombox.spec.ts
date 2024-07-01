
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBoombox from "../../src/components/MdiBoombox.vue";

test("MdiBoombox snapshot", () => {
  const wrapper = mount(MdiBoombox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
