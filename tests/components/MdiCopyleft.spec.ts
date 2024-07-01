
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCopyleft from "../../src/components/MdiCopyleft.vue";

test("MdiCopyleft snapshot", () => {
  const wrapper = mount(MdiCopyleft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
