
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRacquetball from "../../src/components/MdiRacquetball.vue";

test("MdiRacquetball snapshot", () => {
  const wrapper = mount(MdiRacquetball, {});
  expect(wrapper.html()).toMatchSnapshot();
});
