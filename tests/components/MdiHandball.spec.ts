
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandball from "../../src/components/MdiHandball.vue";

test("MdiHandball snapshot", () => {
  const wrapper = mount(MdiHandball, {});
  expect(wrapper.html()).toMatchSnapshot();
});
