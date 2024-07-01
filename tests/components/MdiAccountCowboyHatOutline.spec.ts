
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountCowboyHatOutline from "../../src/components/MdiAccountCowboyHatOutline.vue";

test("MdiAccountCowboyHatOutline snapshot", () => {
  const wrapper = mount(MdiAccountCowboyHatOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
