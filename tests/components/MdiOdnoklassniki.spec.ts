
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOdnoklassniki from "../../src/components/MdiOdnoklassniki.vue";

test("MdiOdnoklassniki snapshot", () => {
  const wrapper = mount(MdiOdnoklassniki, {});
  expect(wrapper.html()).toMatchSnapshot();
});
