
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStorefrontEdit from "../../src/components/MdiStorefrontEdit.vue";

test("MdiStorefrontEdit snapshot", () => {
  const wrapper = mount(MdiStorefrontEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
