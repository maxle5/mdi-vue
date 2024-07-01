
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoogleCirclesExtended from "../../src/components/MdiGoogleCirclesExtended.vue";

test("MdiGoogleCirclesExtended snapshot", () => {
  const wrapper = mount(MdiGoogleCirclesExtended, {});
  expect(wrapper.html()).toMatchSnapshot();
});
