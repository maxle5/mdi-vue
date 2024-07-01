
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountTieHatOutline from "../../src/components/MdiAccountTieHatOutline.vue";

test("MdiAccountTieHatOutline snapshot", () => {
  const wrapper = mount(MdiAccountTieHatOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
