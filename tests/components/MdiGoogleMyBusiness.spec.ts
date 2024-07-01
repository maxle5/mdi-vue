
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoogleMyBusiness from "../../src/components/MdiGoogleMyBusiness.vue";

test("MdiGoogleMyBusiness snapshot", () => {
  const wrapper = mount(MdiGoogleMyBusiness, {});
  expect(wrapper.html()).toMatchSnapshot();
});
