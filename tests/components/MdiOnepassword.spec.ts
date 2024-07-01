
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOnepassword from "../../src/components/MdiOnepassword.vue";

test("MdiOnepassword snapshot", () => {
  const wrapper = mount(MdiOnepassword, {});
  expect(wrapper.html()).toMatchSnapshot();
});
