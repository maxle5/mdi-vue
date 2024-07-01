
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandExtended from "../../src/components/MdiHandExtended.vue";

test("MdiHandExtended snapshot", () => {
  const wrapper = mount(MdiHandExtended, {});
  expect(wrapper.html()).toMatchSnapshot();
});
