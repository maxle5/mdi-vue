
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountTieWoman from "../../src/components/MdiAccountTieWoman.vue";

test("MdiAccountTieWoman snapshot", () => {
  const wrapper = mount(MdiAccountTieWoman, {});
  expect(wrapper.html()).toMatchSnapshot();
});
